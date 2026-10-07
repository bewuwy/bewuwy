import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	TUTORING_AVAILABLE: {
		public: true,
		static: true,
		description: 'Whether tutoring services and contact info are available',
		schema: (value) => value === 'true' || value === '1'
	}
});
