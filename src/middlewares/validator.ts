//import { GraphQLError } from 'graphql';
import { ArraySchema, ObjectSchema, StringSchema } from 'joi';

class Validator {
	private static instance: Validator;

	private constructor() {}

	static get(): Validator {
		if (!Validator.instance) {
			Validator.instance = new Validator();
		}
		return Validator.instance;
	}

	check = (schema: ObjectSchema | ArraySchema | StringSchema, input: object | string) => {
		const { value, error } = schema.validate(input, {
			abortEarly: false,
		});
		//if (error) throw new GraphQLError(error.message);
		if (error) throw new Error(error.message);
	};
}

const validator = Validator.get();

export { validator as Validator };
