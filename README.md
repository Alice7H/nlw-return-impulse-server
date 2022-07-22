# NLW 8 - Server Part

Este projeto tem o objetivo de:

- Receber os feedbacks.
- 'Encaminhar' as informações dos feedbacks a uma caixa de e-mail.

## Tecnologias utilizadas

- [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com)
- [Prisma](https://www.prisma.io/)
- [Nodemailer](https://nodemailer.com/about/)
- [Mailtrap](https://mailtrap.io/)
- [Jest](https://jestjs.io/)
- [SWC](https://swc.rs/)

## Prisma

Rodamos o `npx prisma init`, assim temos a pasta prisma criada, bem como o arquivo de variáveis de ambiente.

Configuramos o prisma com o banco de dados sqlite, disponível na [documentação](https://www.prisma.io/docs/concepts/database-connectors/sqlite)

Rodamos o comando `npx prisma migrate dev` para criar a nossa tabela em modo de desenvolvimento.

Rode `npx prisma migrate deploy` para versão de produção.

Depois identificamos o que criamos, no caso, foi a tabela de feedback então nomeamos de `create feedbacks`.

A tabela será criada e uma pasta chamada migrations conterá informações sobre a tabela criada.

Para visualizar a tabela criada, rodamos o comando `npx prisma studio`

## SOLID

S — Single Responsibility Principle (Princípio da responsabilidade única)

O — Open-Closed Principle (Princípio Aberto-Fechado)

L — Liskov Substitution Principle (Princípio da substituição de Liskov)

I — Interface Segregation Principle (Princípio da Segregação da Interface)

D — Dependency Inversion Principle (Princípio da inversão da dependência)

1. Cada classe tem uma responsabilidade única.
2. As classes da aplicação devem ser abertas para extensão e fechadas para modificação.
3. Uma classe derivada deve ser substituível por sua classe base.
4. Uma classe não deve ser forçada a implementar interfaces e métodos que não irão utilizar.
5. Dependa de abstrações e não de implementações.

## Clean Architecture

reposity: fornece uma abstração de dados. (Camada de dados da aplicação)

use-cases: é um cenário potencial no qual um sistema recebe uma solicitação externa e responde a ela. (Camada de aplicação - regra de negócios)

adapter: funciona como uma ponte entre duas interfaces incompatíveis.

## Testes

Os arquivos de testes podem ter o formato `.test.ts` ou `.spec.ts`, e para rodar os testes, use o comando `npm run test`.

## Para saber mais

Ts-node-dev é um mecanismo de compila a aplicação TypeScript e REPL(Read-Eval-Print Loop) para Node.js. O JIT(Just-In-Time) transforma TypeScript em JavaScript em tempo de execução.

REPL significa que as entradas do usuário são lidas e avaliadas e, em seguida, os resultados são retornados ao usuário, ou seja, permite que você execute diretamente o TypeScript no Node.js sem pré-compilar e modificando os arquivos quando necessário.

Prisma é um Mapeamento de Objeto Relacional; fornece uma camada orientada a objetos entre banco de dados relacionais e linguagens de programação orientada a objetos, sem ter que escrever consultas SQL.

Express é um framework web node js que fornece recursos amplos para a construção de aplicativos web e móveis.

UUID - universal uniq id
ID - número identificador
Snowflake - formato criado pelo twitter para gerar números de identificação exclusivos em alta escala.

O Nodemailer é um módulo para aplicativos Node.js para permitir o envio de e-mail fácil.

Mailtrap é uma ferramenta (caixa SMTP falsa) para entregar e-mails, assim você pode encaminhar algumas mensagens para seus colegas, clientes ou suas próprias caixas de entrada para fins de teste.

Jest é um framework de teste em JavaScript.

O SWC (Speedy web compiler) é uma ferramenta de desenvolvimento de compilação e agrupamento. Segundo o site da SWC, ele é 20x mais rápido que o Babel.

A Railway é uma plataforma de infraestrutura na qual você pode provisionar infraestrutura, desenvolver com essa infraestrutura localmente e, em seguida, implantar na nuvem.
