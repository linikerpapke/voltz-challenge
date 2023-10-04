import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedDatabase() {
  await prisma.tag.createMany({
    data: [
      { id: 1, name: 'organization' },
      { id: 2, name: 'planning' },
      { id: 3, name: 'collaboration' },
      { id: 4, name: 'writing' },
      { id: 5, name: 'calendar' },
      { id: 6, name: 'api' },
      { id: 7, name: 'json' },
      { id: 8, name: 'schema' },
      { id: 9, name: 'node' },
      { id: 10, name: 'github' },
      { id: 11, name: 'rest' },
      { id: 12, name: 'web' },
      { id: 13, name: 'framework' },
      { id: 14, name: 'http2' },
      { id: 15, name: 'https' },
      { id: 16, name: 'localhost' },
    ],
  });

  await prisma.tool.createMany({
    data: [
      {
        id: 1,
        title: 'Notion',
        link: 'https://notion.so',
        description: 'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized.',
      },
      {
        id: 2,
        title: 'json-server',
        link: 'https://github.com/typicode/json-server',
        description: 'Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in codi',
      },
      {
        id: 3,
        title: 'fastify',
        link: 'https://www.fastify.io/',
        description: 'Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.',
      },
    ],
  });

  await prisma.tool.update({
    where: { id: 1 },
    data: { tags: { connect: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }] } },
  });

  await prisma.tool.update({
    where: { id: 2 },
    data: { tags: { connect: [{ id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }, { id: 11 }] } },
  });

  await prisma.tool.update({
    where: { id: 3 },
    data: { tags: { connect: [{ id: 12 }, { id: 13 }, { id: 9 }, { id: 14 }, { id: 15 }, { id: 16 }] } },
  });

  console.log('Seed completed successfully.');
}

seedDatabase()
  .catch((error) => {
    console.error('Error seeding the database:', error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
