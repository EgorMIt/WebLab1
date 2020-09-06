<?php
    //запомнили время до выполнения
    $start_time = microtime();
    $r = $_GET['r'];
    $x = $_GET['x'];
    $y = $_GET['y'];
    $out = "";
    $flag = 0;
    $answer = "";
    //провека на присутсвие данных
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        if (!preg_match('/^-?\d+(\.|,)?\d*$/', $r) ||
            !preg_match('/^-?\d+(\.|,)?\d*$/', $x) ||
            !preg_match('/^-?\d+(\.|,)?\d*$/', $y))
            $flag = 1;
        //валидация принятых данных
        if($x < -2 || $x > 2)
            $flag = 1;
        if($r< 1 || $r>3)
            $flag = 1;
        if($y<-5 || $y>5)
            $flag = 1;

        //провекра на вхождение в область
        if((($x*$x + $y*$y) <= $r*$r/4 && $x >=0 && $y <= 0)||
            ($y+2*$x<=$r && $x>=0 && $y>=0)||
            ($x<=0 && $y<=0 && $x>=(-1)*$r/2 && $y>= (-1)*$r)){
            $out = "Входит";
        }else{
            $out = "Не входит";
        }

        $answer .= $flag;
        $answer .= ";";
        $answer .= $x;
        $answer .= ";";
        $answer .= $y;
        $answer .= ";";
        $answer .= $r;
        $answer .= ";";
        $answer .= $out;
        $answer .= ";";
        $answer .= date("Y-m-d H:i:s");
        $answer .= ";";
        $answer .= microtime()-$start_time;
        $answer .= "/";
        echo $answer;
    }
