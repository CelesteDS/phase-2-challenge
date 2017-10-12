

    When you run a command in the terminal, where does BASH look for that command?
      In the PATH environment variable. (In each directory in order & uses the first one it finds.)

    On a UNIX computer, how do you stop a running process?
      control-c

    What packages do you have installed via homebrew?
      coreutils, icu4c, openssl, postgresql, sqlite, hub, node, pcre, readline, swig

    On a UNIX computer, how do you find the process id of a running process?
      ps -A will give you a list of running processes, including their process id

    In a terminal, what does control-c do?
      Quits process

    In a terminal, what does control-a do?
      Moves cursor to beginning of line

    In a terminal, what does control-e do?
      Moves cursor to end of line.

    What keyboard shortcut do you use to split the screen in your editor?
      command-alt-3 (horizontal) command-alt-2 (vertical)

    What keyboard shortcut do you use to split the screen in your terminal?
      shift-command-d

    When a terminal command completes, how can you tell if it was successful or not?
      When the command completes, you'll see the command prompt again. If it
      threw a fatal error, it will print the error and where it was thrown. If
      there was a mistake in your syntax, it'll give you a usage note. If it can't
      find the command (or file, directory etc) it will tell you. Otherwise
      the terminal successfully ran the command.

    What does your ~/.gitconfig have in it? (paste the whole file here)
    [user]
	     name = Celeste De Santiago
	     email = celestedaphne@gmail.com
    [core]
   	   editor = atom
    [alias]
   	   s = status

    What is the difference between a relative and absolute path?
      relative path starts from where you currently are. Absolute path begins
      with / and starts from your home directory.

    Lets say you have the following file structure
    ~
    └── Projects
        ├── pinterest-for-dogs
        │   ├── README.md
        │   └── package.json
        └── linkedin-for-dancers
            ├── README.md
            └── package.json

    And you were in the linkedin-for-dancers folder. What command would you use to change folders to the pinterest-for-dogs folder?
      cd ../pinterest-for-dogs

    What keyboard shortcut do you use, in your editor, to go to a file in the project you have open?
      command-t    

    What files or folders do you want all git repositories to ignore?
      When using Node, you always want to ignore node_modules/

    What is the main difference between == and === in JavaScript?
      == attempts to do type conversion if the elements are not the same type and then compares the two
      === 'strict equality' is always false if given different types
