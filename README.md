# my_IDE


# Basic Cloud IDE

This is a basic implementation of a cloud-based Integrated Development Environment (IDE). It includes a pseudo terminal and a code editor. Please note that this implementation is not secure and should not be used in a production environment.

## Features

- **Pseudo Terminal**: Implemented using Xterm and pty.
- **Code Editor**: Implemented using React Ace.
- **Server-Side Storage**: User's code is saved on the server.
- **Full Terminal Access**: Users have full access to the server terminal from the frontend. (not secure at all!!)



## Usage

1. Start the server:
    ```sh
    node index.js
    ```
2. 1. Start the client side:
    ```sh
    npm run dev
    ```
2. Open your browser and navigate to `http://localhost:3000`.

## Technologies Used

- **Frontend**: React, Xterm.js, React Ace, socket-client
- **Backend**: Node.js, pty.js, socket.io

## Disclaimer

This project is for educational purposes only. It is not secure and should not be used in a production environment.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
