## Stack
Projeto desenvolvido com Node.js.

## Como rodar o projeto
É necessário ter algum gerenciador de pacotes instalado na sua máquina. Ex: NPM ou Yarn.
É necessário também ter o `docker` e o `docker-compose` instalados.

1. Instalar dependências: `npm install` ou `yarn`
2. Fazer a build do docker: `docker-compose build`
3. Iniciar o container onde fica o banco de dados (MongoDB): `docker-compose up -d mongo`
4. Importar dados pra dentro do MongoDB que está rodando no container:
    - Pegar id do container do Mongo: `docker ps`
    - Copiar arquivo com os dados que serão importados pra dentro do container do mongo: `docker cp <CAMINHO_DO_PROJETO>/data.json <CONTAINER_ID>:/data.json`
    - Fazer import desses dados pra dentro do MongoDB: `docker exec <CONTAINER_ID> mongoimport -d fiap_nubank_income -c income --file ./data.json --jsonArray`
5. Iniciar container onde o proxy irá rodar: `docker-compose up app`

Agora o projeto deve estar funcionando!
Você pode testar acessando esse endpoint: **GET** `http://localhost:3005/income/get-all`.

Ele deve retornar os dados que foram importados pra dentro do MongoDB.

## Como funciona

Esse projeto é um proxy que centraliza 2 serviços:
1. [Serviço responsável pela parte de carteiras](https://github.com/evelew/fiap-nubank-service-wallets)
2. [Serviço responsável pela parte de rendimentos](https://github.com/evelew/fiap-nubank-service-incomes)

Esse serviço é utilizado pelo app: [https://github.com/evelew/fiap-nubank-client](https://github.com/evelew/fiap-nubank-client)

## Objetivo

Projeto desenvolvido como trabalho do módulo de microsserviços do MBA de Engenharia de Software da FIAP.
