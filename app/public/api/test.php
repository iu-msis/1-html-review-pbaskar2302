<?php

$num = 2;
$foo = $num ." be";
$bar = "or not to be";

echo $foo . ' ' . $bar . "\n";

echo $num * $num * $num;

$arr = [
    "first" => "Tom",
    "second" => "Bipin",
    "best" => "DS"
];

$arr2 = [1,1,2,3,5,8];

if (true) {
    echo "\nTRUE\n";
}

while (true) {
    //This way it actually does nothing
    break;
}

foreach($arr as $key=>$val) {
    echo "<li>" . $key . " is " . $val . "</li>";
}
echo "</ul>";

function printAndEncode( $val ) {
echo json_encode(
    $arr,
    JSON_PRETTY_PRINT|JSON_THROW_ON_ERROR
);
}