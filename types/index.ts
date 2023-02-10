import { PropertiesSchema } from '@lyrasearch/lyra'

export { }

declare global {
    type Nullable<T> = T | null;

    interface Schema extends PropertiesSchema {
        _id: 'number'
    }

    interface ISearchable {
        options: {
            type: 'command' | 'redirect'
        }
    }

    interface InputOption<T> {
        focus: boolean,
        value: T,
        required?: boolean,
    }
}