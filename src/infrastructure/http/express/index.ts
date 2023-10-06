/* import express, { Express, Request, Response } from 'express';
import { CreateToolUseCase } from '../../../application/tools/use-cases/create-tool.use-case';
import { ToolInMemoryRepository } from '../../database/in-memory/tool-in-memory.repository';

const app: Express = express()
app.use(express.json())
const port = process.env.PORT || 3000;

const toolRepo = new ToolInMemoryRepository();

app.post('/express/tools', async (request: Request, response: Response) => {
    const createUseCase = new CreateToolUseCase(toolRepo);
    const output = await createUseCase.execute(request.body);
    response.status(201).json(output)
})

app.listen(port, () => {
    console.log(`Express server is running on port ${port}`)
}) */
