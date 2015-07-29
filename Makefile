all: .fontcustom-manifest.json

.fontcustom-manifest.json: fontcustom.yml svg/*
	fontcustom compile -c fontcustom.yml
