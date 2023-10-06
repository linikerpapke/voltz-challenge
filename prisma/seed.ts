import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedDatabase() {
  await prisma.tag.createMany({
    data: [
      { id: "a7476f6f-a799-4106-b90c-9ffe90a33d4f", name: 'organization' },
      { id: "8377eef1-29b5-4e11-a320-b3f684268942", name: 'planning' },
      { id: "985986c5-219f-4934-aebb-d42b35153e70", name: 'collaboration' },
      { id: "ba024f33-c901-4007-b529-f92c484631c9", name: 'writing' },
      { id: "510deec6-a4bb-461d-bb48-f456219da2b7", name: 'calendar' },
      { id: "e8802907-6491-4d0f-8fac-352721aea8cb", name: 'api' },
      { id: "47cefe76-752e-4ccb-9a25-7eab451f864b", name: 'json' },
      { id: "cd119a78-0c8a-4af0-883a-4153b88e7a8b", name: 'schema' },
      { id: "6ec22293-aea1-48ff-9acc-2197606e8246", name: 'node' },
      { id: "ccfd1980-af76-4c6e-8af2-e79e967bba92", name: 'github' },
      { id: "8d79f3c9-839f-4ce1-bebd-a57961bdb2e7", name: 'rest' },
      { id: "89e1d434-4e77-4c71-9018-e68ec094da98", name: 'web' },
      { id: "262a29ac-6bc6-461d-945f-41ceac9578dc", name: 'framework' },
      { id: "7d569e95-b0a9-432d-b299-4f9f936856cc", name: 'http2' },
      { id: "22fb92bd-a1ae-4746-b32f-9c6789f5d4c5", name: 'https' },
      { id: "2f16c029-20b2-48cb-92e4-604ca76a9b1b", name: 'localhost' },
    ],
  });

  await prisma.tool.createMany({
    data: [
      {
        id: "3732eb9c-531f-48b5-a7e4-82946cb81b4f",
        title: 'Notion',
        link: 'https://notion.so',
        description: 'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized.',
      },
      {
        id: "2ec1e368-e925-45ce-b4e8-0d204b0bf663",
        title: 'json-server',
        link: 'https://github.com/typicode/json-server',
        description: 'Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in codi',
      },
      {
        id: "fa015a84-6193-475c-b290-254972af867d",
        title: 'fastify',
        link: 'https://www.fastify.io/',
        description: 'Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.',
      },
    ],
  });

  await prisma.tool.update({
    where: { id: "3732eb9c-531f-48b5-a7e4-82946cb81b4f" },
    data: { tags: { connect: [{ id: "a7476f6f-a799-4106-b90c-9ffe90a33d4f" }, { id: "8377eef1-29b5-4e11-a320-b3f684268942" }, { id: "985986c5-219f-4934-aebb-d42b35153e70" }, { id: "ba024f33-c901-4007-b529-f92c484631c9" }, { id: "510deec6-a4bb-461d-bb48-f456219da2b7"}] } },
  });

  await prisma.tool.update({
    where: { id: "2ec1e368-e925-45ce-b4e8-0d204b0bf663" },
    data: { tags: { connect: [{ id: "e8802907-6491-4d0f-8fac-352721aea8cb" }, { id: "47cefe76-752e-4ccb-9a25-7eab451f864b" }, { id: "cd119a78-0c8a-4af0-883a-4153b88e7a8b" }, { id: "6ec22293-aea1-48ff-9acc-2197606e8246" }, { id: "ccfd1980-af76-4c6e-8af2-e79e967bba92" }, { id: "8d79f3c9-839f-4ce1-bebd-a57961bdb2e7" }] } },
  });

  await prisma.tool.update({
    where: { id: "fa015a84-6193-475c-b290-254972af867d" },
    data: { tags: { connect: [{ id: "89e1d434-4e77-4c71-9018-e68ec094da98" }, { id: "262a29ac-6bc6-461d-945f-41ceac9578dc" }, { id: "6ec22293-aea1-48ff-9acc-2197606e8246" }, { id: "7d569e95-b0a9-432d-b299-4f9f936856cc" }, { id: "22fb92bd-a1ae-4746-b32f-9c6789f5d4c5" }, { id: "2f16c029-20b2-48cb-92e4-604ca76a9b1b" }] } },
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
