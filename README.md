# Caso queira subir a API local siga os passos

a - Crie um arquivo docker-compose.yml:

```bash
version: '3.4'

services:
  seq:
    image: datalust/seq:latest
    container_name: seq
    environment:
      - ACCEPT_EULA=Y
    ports:
      - 5341:5341
      - 8081:80
```

b - Depois execute o comando para subir o Seq:

```bash
docker-compose up
```

c - Acesse o link:

```bash
 http://localhost:8081/
```

# Caso queria testar como docker-compose da aplicação:

Na raíz do projeto existe docker-compose.yml, execute os comandos:

a - Subir containers

```bash
docker-compose up -d --build
```

b - Descer containers

```bash
docker-compose down
```

Obs.: É necessário conceder permissão local ao arquivo wait-for-seq.sh com o comando:

```bash
chmod +x wait-for-seq.sh
```
