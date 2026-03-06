ifconfig 
ifconfig 
sudo su
sudo mude-hostname exxxxx-001122
sudo su
sudo chown -R seu_nome:seu_nome /etc/lazarus/
sudo chown -R seu_nome:seu_nome /usr/lib/lazarus/
sudo chown -R escola:escola /usr/lib/lazarus/
sudo chown -R escola:escola /etc/lazarus/
start mysq
sudo chown -R escola:escola /etc/lazarus/
start mysql
mysql -version
mysql -v
mysql -u -root -p
mysql -u -root
sudo apt remove --purge firefox
sudo apt remove --purge firefoxe-locale-*
sudo apt remove --purge firefox-locale-*
sudo apt autoremove
sudo apt autoclean
rm ^rf ^/.mozilla
rm ~rf ~/.mozilla
rm ~rf ~/.cache/.mozilla/firefox
sudo apt update
sudo apt install firefox
sudo apt update
reboot
awk -v cmd='openssl x509 -noout -subject' ' /BEGIN/{close(cmd);next} {print | cmd}' < /etc/ssl/certs/ca-certificates.crt
grep -i "parana" /etc/ssl/certs/ca-certificates.crt
awk -v cmd='openssl x509 -noout -subject' ' /BEGIN/{close(cmd);next} {print | cmd}' < /etc/ssl/certs/ca-certificates.crt
ls /usr/local/share/ca-certificates/
wget http://pki.seed.pr.gov.br -O filtroweb_seed.crt
sudo cp filtroweb_seed.crt /usr/local/share/ca-certificates/filtroweb_seed.crt
sudo update-ca-certificates
echo | openssl s_client -showcerts -connect gemini.google.com:443 2>/dev/null | openssl x509 -outform PEM > certificado_real.crt
ls -lh certificado_real.crt
sudo cp certificado_real.crt /usr/local/share/ca-certificates/filtroweb_seed.crt
sudo update-ca-certificates --fresh
echo | openssl s_client -showcerts -connect gemini.google.com:443 2>/dev/null > cadeia_completa.txt
awk '/BEGIN CERTIFICATE/{c++} c==2' cadeia_completa.txt > certificado_ca_seed.crt
ls -lh certificado_ca_seed.crt
