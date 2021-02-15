# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure("2") do |config|
  # The most common configuration options are documented and commented below.
  # For a complete reference, please see the online documentation at
  # https://docs.vagrantup.com.

  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://vagrantcloud.com/search.
  config.vm.box = "ubuntu/bionic64"

  # within the machine from a port on the host machine and only allow access
  # via 127.0.0.1 to disable public access
  config.vm.network "forwarded_port", guest: 4000, host: 4000, host_ip: "127.0.0.1"

  # Install dependencies.
  config.vm.provision "shell", privileged: true, inline: <<-SHELL
    apt-get update
    apt-get install -y build-essential ruby-bundler ruby-dev
  SHELL

  # Set up project.
  config.vm.provision "shell", privileged: false, inline: <<-SHELL
    cd /vagrant
    bundle install
  SHELL

  # Show a usage message.
  config.vm.provision "shell", privileged: false, run: "always", inline: <<-SHELL
    echo "Jekyll environment ready for use. To run:"
    echo "vagrant ssh -c 'cd /vagrant && bundle exec jekyll serve --force_polling --host 0.0.0.0'"
  SHELL

end
