FROM node:18

WORKDIR /usr/src/app

# Instala o utilitário 'netcat-openbsd' para verificação de porta
RUN apt-get update && apt-get install -y netcat-openbsd

# Copia os arquivos de configuração e pacotes de dependência
COPY package*.json ./

# Instala as dependências se o node_modules não existir
RUN [ -e "node_modules" ] || npm install

# Copia o restante do código fonte
COPY . .

# Copia o script de espera
COPY wait-for-seq.sh /usr/src/app/wait-for-seq.sh

# Atribui permissão de execução ao script
RUN chmod +x /usr/src/app/wait-for-seq.sh

# Exponhe a porta 3000
EXPOSE 3000

# Define o comando de inicialização para esperar pelo Seq e iniciar o servidor
CMD ["/bin/bash", "-c", "/usr/src/app/wait-for-seq.sh && node server.js"]
