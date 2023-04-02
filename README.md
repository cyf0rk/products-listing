### Insturctions to run this project

First clone this repo to your local machine

```git clone https://github.com/cyf0rk/products-listing.git```

cd into project directory and run `npm install`

After packages are installed run `npm start`

You can now go to [http://localhost:3000](http://localhost:3000) where app will be running

> Note: You have to run json-server for fake API data otherwise products can't be fetched

----

***API data*** can be faked by running `json-server` on productsData.json file which can be found under `api/` folder

To fake API run this command from project root directory:

```./node_modules/.bin/json-server -p 3003 --watch api/productsData.json```

> Note: make sure json-server package is installed

> Note: you can change port to whichever you'd like but then you should also change the port in `src/services/fetchProducts.ts` file