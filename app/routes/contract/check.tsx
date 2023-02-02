import type { ActionArgs} from "@remix-run/node";
import { json } from "@remix-run/node";

import data from "~/data/result.json";

/**
 * Save email adress of the user in Airtable
 * 
 * @param { ActionArgs } request
 * @returns { json } Returns a json containing either the error message or the success message
 */
export async function action({ request }: ActionArgs) {
    const contract = (await request.formData()).get("contract");

    if (contract === "") {
        return json({}, { status: 200 });
    }

    return json(data);
}