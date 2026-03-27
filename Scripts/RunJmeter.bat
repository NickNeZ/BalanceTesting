@echo off

echo Cleaning old reports...
rmdir /s /q test\jmeter\report
mkdir test\jmeter\report

del test\jmeter\results.jtl

echo Rebuilding containers...
docker compose down
docker compose up --build -d

timeout /t 5

echo Running JMeter...
docker compose run --rm jmeter -n -t /tests/counter.jmx -l /tests/results.jtl -e -o /tests/report

echo Done!
pause