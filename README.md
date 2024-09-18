# ashapurtiloans_backend
ashapurtiloans_backend

#users-service modal
# command for create migration in mysql node typeORM
npx typeorm migration:create src/users-service/migrations/AlertUser1  
# run the migration 
npx ts-node -r tsconfig-paths/register node_modules/typeorm/cli.js migration:run -d src/users-service/config/databaseConfig.ts


###### simple query
# SELECT * FROM ashapurtiloansdb.categories
# INSERT into ashapurtiloansdb.loans (name) values ('typescript') ('javascript');
# UPDATE ashapurtiloansdb.loans SET minTimeLoanTenure = '6', maxTimeLoanTenure = '12' WHERE id = 5;
# DELETE FROM ashapurtiloansdb.loans  WHERE id = 1;