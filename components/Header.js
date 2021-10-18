import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import * as Realm from "realm-web";



const Header = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [autoComplete, setAutoComplete] = useState([]);

  useEffect(async () => {
    if (searchTerm.length) {
      // Realm App Id in the .env.local file
      const REALM_APP_ID = process.env.NEXT_PUBLIC_REALM_APP_ID;
      const app = new Realm.App({ id: REALM_APP_ID });
      const credentials = Realm.Credentials.anonymous();
      try {
        const user = await app.logIn(credentials);
        const searchAutoComplete = await user.functions.searchAutoComplete(
          searchTerm
        );
        setAutoComplete(() => searchAutoComplete);
      } catch (error) {
        console.error(error);
      }
    } else {
      setAutoComplete([]);
    }
  }, [searchTerm]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSearchTerm("");
    router.push({
      pathname: `/search/${searchTerm}`,
    });
  };

  const handleSelect = (id) => {
    setSearchTerm("");
    router.push({
      pathname: `/products/${id}`,
    });
  };

  return (
    <>
      <header>
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <Link href="/">
              <div className="w-full text-green-500 text-2xl font-semibold cursor-pointer">
                Intelistyle Search Project
              </div>
            </Link>
            

              
            </div>
          </div>

          

          <div className="relative mt-6 max-w-lg mx-auto">
            
            <form onSubmit={handleSubmit}>
              <input
                className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-green-500 focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Search"
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
              />
            </form>
            {autoComplete.length > 0 && (
              <ul className="absolute inset-x-0 top-full bg-green-200 border border-green-500 rounded-md z-20">
                {autoComplete.map((item) => {
                  return (
                    <li
                      key={item._id}
                      className="px-4 py-2 hover:bg-green-300 cursor-pointer"
                      onClick={() => handleSelect(item._id)}
                    >
                      {item.product_title}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
      </header>
      
    </>
  );
};

export default Header;
