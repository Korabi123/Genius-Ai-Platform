# AI Platform with Next.js, Tailwind CSS, TypeScript, Prisma, and Stripe

![GitHub last commit](https://img.shields.io/github/last-commit/Korabi123/Genius-Ai-Platform)
![GitHub stars](https://img.shields.io/github/stars/Korabi123/Genius-Ai-Platform?style=social)
![GitHub forks](https://img.shields.io/github/forks/Korabi123/Genius-Ai-Platform?style=social)

Welcome to the AI Platform, a powerful web application built using Next.js, Tailwind CSS, TypeScript, Prisma, and Stripe. This platform serves as a robust foundation for building and deploying AI-powered applications.

## Features

- **Next.js**: Utilize the power of server-side rendering and routing to create fast and responsive web applications.

- **Tailwind CSS**: Craft beautiful and efficient user interfaces with the highly customizable utility-first CSS framework.

- **TypeScript**: Enhance code quality, maintainability, and productivity with TypeScript's static typing.

- **Prisma**: Simplify database operations and migrations with Prisma, a modern database toolkit and ORM.

- **Stripe**: Seamlessly integrate secure payment processing using Stripe to monetize your AI services.

## Getting Started

Follow these steps to get the AI Platform up and running on your local machine:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Korabi123/Genius-Ai-Platform.git
   ```

2. **Install Dependencies**:

   ```bash
   cd ai-platform
   npm install
   ```

3. **Set Up Environment Variables**:

   Create a `.env` file in the root directory and configure your environment variables. You'll need to set up your database connection, Stripe API keys, and any other necessary variables.

   ```env
     # This was inserted by `prisma init`:
    # Environment variables declared in this file are automatically made available to Prisma.
    # See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema
    
    # Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
    # See the documentation for all the connection string options: https://pris.ly/d/connection-strings
    
    DATABASE_URL=""
    
    
    # Clerk auth
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
    CLERK_SECRET_KEY=
    
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
    
    # OpenAI
    OPENAI_API_KEY=
    
    # ReplicateAI
    REPLICATE_API_TOKEN=
    
    # Stripe
    STRIPE_API_KEY=
    STRIPE_WEBHOOK_SECRET=
    
    # App url
    NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Database Migration**:

   Run Prisma migrations to create your database schema.

   ```bash
   npx prisma db push
   ```

5. **Start the Development Server**:

   ```bash
   npm run dev
   ```

6. **Open in Your Browser**:

   Your AI Platform should now be running at [http://localhost:3000](http://localhost:3000). You can access it in your browser to start building and testing your AI-powered applications.

## Deployment

When you're ready to deploy your AI Platform to production, you can follow Next.js and your hosting provider's deployment guides. Make sure to set your environment variables for the production environment.

## Contributing

We welcome contributions! If you'd like to enhance this AI Platform or fix any issues, please follow these steps:

1. Fork the repository.

2. Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature/new-feature
   ```

3. Make your changes and commit them:

   ```bash
   git commit -m "Add new feature"
   ```

4. Push your changes to your fork:

   ```bash
   git push origin feature/new-feature
   ```

5. Open a pull request to the `main` branch of this repository. We'll review your changes and merge them if they align with the project's goals.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

We want to express our gratitude to the open-source community for their contributions, which have made this project possible.
