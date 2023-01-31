# Getting Started

> [Learn Prisma In 60 Minutes](https://www.youtube.com/watch?v=RebA5J-rlwg)

> [Prisma - The Easiest Way to Work with a Database in Next.js (UPDATED)](https://www.youtube.com/watch?v=FMnlyi60avU)

- Initial setup

```bash
yarn init

yarn add -D prisma typescript ts-node @types/node nodemon
```

- DATABASE_URL

  - postgres - `postgresql://<username>:<password>@localhost:5432/DATABASE_NAME`
  - MySQL - `mysql://<username>:<password>@localhost:3306/DATABASE_NAME`

> For root, username is 'root' and password is '', empty string

- Prisma

```bash
# db - postgres
npx prisma init --datasource-provider postgresql
```

> To format the .schema file - `npx prisma format`

- Migrate new changes to the DB

```bash
# still in dev mode
npx prisma migrate dev --name init
```

- After migration, use `prisma client` to run queries

```typescript
// script.ts

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // queries to be executed here
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
```

### Prisma studio

```bash
npx prisma studio

# visit - http://localhost:5555
```
