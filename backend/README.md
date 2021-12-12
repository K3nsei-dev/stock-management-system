> CRTL + SHIFT + V to preview

> **NB** Drop all all databases
> - clinic_stocktake

## Install dependencies
```
npm i

```

## Create Database
> Using your ***terminal*** / ***CMD***
```
createdb -U postgres clinic_stocktake

```

## Create config folder
> create file **creds.js**
```ruby
module.exports = {
    DB_DATA: 'academy_db',
    DB_DATA_TEST: 'academy_db_test', 

    DB_USER: '<your-own-postgres-username',
    DB_PASS: '<your-own-postgres-password',
    DB_PORT: 5432,
    DB_HOST:  'localhost',    

    PORT: 3000
};
```

## Start server | Test
> **Backend**
```
npm run dev

```