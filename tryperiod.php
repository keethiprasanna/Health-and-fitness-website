<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $start_date = $_POST["start_date"];
    $duration = $_POST["duration"];
    $heavy_days = $_POST["heavy_days"];
    $medium_days = $_POST["medium_days"];
    $normal_days = $_POST["normal_days"];
    $spotting_days = $_POST["spotting_days"];
    $pads_changed = $_POST["pads_changed"];
    $mood = $_POST["mood"];
    $cravings = $_POST["cravings"];
    $ovulation_date = $_POST["ovulation"];

    // Calculate next period date based on the given duration
    $next_period_date = date('Y-m-d', strtotime($start_date . ' + ' . ($duration + 28) . ' days'));

    // Calculate ovulation date (assuming ovulation occurs 14 days before the next period)
    $ovulation_date_calculated = date('Y-m-d', strtotime($next_period_date . ' - 14 days'));

    // Overall period report
    $report = "<strong>Period Report:</strong><br>";
    $report .= "Next period is expected on: " . $next_period_date . "<br>";
    $report .= "Ovulation date is expected on: " . $ovulation_date_calculated . "<br>";
    $report .= "Mood throughout the period: " . $mood . "<br>";
    $report .= "Cravings: " . $cravings . "<br>";
    $report .= "Duration: " . $duration . " days<br>";
    $report .= "Heavy flow days: " . $heavy_days . "<br>";
    $report .= "Medium flow days: " . $medium_days . "<br>";
    $report .= "Normal flow days: " . $normal_days . "<br>";
    $report .= "Spotting days: " . $spotting_days . "<br>";
    $report .= "Minimum pads changed: " . $pads_changed . "<br>";

    echo "<!DOCTYPE html>
    <html lang=\"en\">
    <head>
        <meta charset=\"UTF-8\">
        <title>Period Report</title>
    </head>
    <body>
        <h1>Period Report</h1>
        <p>" . $report . "</p>
    </body>
    </html>";
}
?>
