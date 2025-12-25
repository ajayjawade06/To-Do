import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { UpdateTitleDto } from './dto/update-title.dto';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    create(createTodoDto: CreateTodoDto): Promise<import("./todo.schema").Todo>;
    findAll(): Promise<import("./todo.schema").Todo[]>;
    update(id: string, updateTodoDto: UpdateTodoDto): Promise<import("./todo.schema").Todo | null>;
    updateTitle(id: string, updateTitleDto: UpdateTitleDto): Promise<import("./todo.schema").Todo | null>;
    remove(id: string): Promise<import("./todo.schema").Todo | null>;
}
