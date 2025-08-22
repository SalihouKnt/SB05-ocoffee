# Comment exécuter le script SQL

- Se connecter à notre serveur Postgres via `psql`

  - `sudo -i -u postgres psql` (ou juste `psql -u postgres` si vous n'avez pas de sudo)

- Créer un utilisateur (admin) pour notre future BDD

  - `CREATE ROLE ocoffee WITH LOGIN PASSWORD 'ocoffee';`

- Créer une base de données

  - `CREATE DATABASE ocoffee WITH OWNER ocoffee;`

- Sortir de `psql`

  - `exit`

- Se placer dans le dossier `data` avec son terminal :
  - `cd <chemin_vers_le_dossier_data>`
- Exécuter les scripts SQL
  - `psql -U ocoffee -d ocoffee -f ./create-tables.sql`
  - `psql -U ocoffee -d ocoffee -f ./seed-data.sql`

Des scripts sont également disponibles dans le [package.json](../package.json) pour automatiser la création des tables et l'insertion de données.
- `npm run db:create`
- `npm run db:seed`
- `npm run db:reset` (execute les deux précédents)