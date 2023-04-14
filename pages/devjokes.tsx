import { DevJokes } from "@/projects";
import Head from "next/head";

const FreeJokes = () => {
  return (
	<>
	<Head>
        <title>Remasters ver2.0.23 - DevJokes</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>

	<DevJokes />
	</>
  
  );
};
export default FreeJokes;