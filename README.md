# ashapurtiloans_backend
ashapurtiloans_backend

#users-service modal
# command for create migration in mysql node typeORM
npx typeorm migration:create src/users-service/migrations/AlertUser1  
# run the migration 
npx ts-node -r tsconfig-paths/register node_modules/typeorm/cli.js migration:run -d src/users-service/config/databaseConfig.ts


