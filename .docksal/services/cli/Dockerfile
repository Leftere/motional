FROM docksal/cli:php8.0-3.2

# All further commands will be performed as the docker user.
USER docker

# Genuine Node version.
ENV NODE_VERSION=16.14.0

# Install additional global npm dependencies
RUN set -e; \
    # Initialize the user environment (this loads nvm)
    . $HOME/.profile; \
    # Install the necessary nodejs version
    nvm install ${NODE_VERSION}; \
    nvm alias default ${NODE_VERSION}

# IMPORTANT! Switching back to the root user as the last instruction.
USER root
