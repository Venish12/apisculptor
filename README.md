# Apisculptor - Automated REST API Generator for TypeORM Models
Apisculptor is a powerful Node.js tool designed to automate the process of generating RESTful APIs for your TypeORM models. With Apisculptor, you can quickly create a new project, define your TypeORM models, and effortlessly generate CRUD (Create, Read, Update, Delete) APIs for them.
## Installation
To use Apisculptor in your Node.js project, you can install it via npm:
```bash
npm install -g apisculptor
```

## Getting Started
Follow the steps below to get started with Apisculptor:

1. Create a new project using the `apisculptor new` command:

```bash
apisculptor new 
```

Apisculptor will ask for folder path and folder name.

```bash
apisculptor generate:api
```

Apisculptor will automatically scan the `model` folder, detect your TypeORM models, and generate CRUD APIs for each model. The generated APIs will be placed in the `src` folder of your project.
after that you need import routes from controller in `src/app.ts`
## Project Structure
Apisculptor follows a specific project structure to organize your code effectively. Here's how your project structure should look like:
```go
myproject/
  ├── src/
  │   ├── controllers/
  │   ├── models/
  │   ├── services/
  │   ├── utils/
  │   ├── app.ts
  │   └── ...
  ├── node_modules/
  ├── package.json
  ├── tsconfig.json
  └── ...
```

The `api` folder will contain the generated REST API files for your models.

## Contributing
We welcome contributions from the community! If you find any issues or have ideas for improvements, please open an issue or submit a pull request on the GitHub repository.
## License
Apisculptor is licensed under the MIT License.
## Acknowledgments
We would like to express our gratitude to the TypeORM and Node.js communities for their invaluable contributions, without which this project would not have been possible.
##
Thank you for using Apisculptor! If you encounter any problems or have any questions, don't hesitate to reach out. Happy coding!

------------------
