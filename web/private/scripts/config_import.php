<?php
// phpcs:ignoreFile -- this is not a Drupal file.

ini_set('memory_limit', '-1');
set_time_limit(0);

echo "Running Drupal deploy process...\n";
passthru('drush deploy -y');

echo "Site updates deployed...\n";
