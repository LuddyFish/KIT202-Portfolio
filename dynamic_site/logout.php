<?php

//TODO Destroy the session and redirect to login.php
session_start();
session_destroy();
header("Location: login.php");
exit;