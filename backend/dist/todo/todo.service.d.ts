import { Model } from 'mongoose';
import { Todo, TodoDocument } from './todo.schema';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { UpdateTitleDto } from './dto/update-title.dto';
export declare class TodoService {
    private todoModel;
    constructor(todoModel: Model<TodoDocument>);
    create(createTodoDto: CreateTodoDto): Promise<Todo>;
    findAll(): Promise<Todo[]>;
    update(id: string, updateTodoDto: UpdateTodoDto): Promise<Todo | null>;
    updateTitle(id: string, updateTitleDto: UpdateTitleDto): Promise<Todo | null>;
    remove(id: string): Promise<Todo | null>;
}
