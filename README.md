Warm-up Programming Assignment 1
--------
2013-11392 김지현

* GitHub Address: https://github.com/simnalamburt/snucse.swpp
* Back-End API Address: http://swpp.hyeon.me

### Instruction
1.  Prepare Ruby on Rails development environment. Its process varies according
    to OS.

1.  Checkout source codes.

    ```sh
    git clone https://github.com/simnalamburt/snucse.swpp.git
    cd swpp
    ```

1.  Initialize Rails project.

    ```sh
    bundle install
    bin/rake db:migrate
    bin/rails server -b 0.0.0.0
    ```

    To deploy this application in production mode, please follow Gorails online
    guide link below:

    https://gorails.com/deploy/ubuntu/14.04
