import { fromFetch } from "rxjs/fetch";
import { switchMap, catchError, of } from "rxjs";
import newData from "../helpers/Data";

const GetData = (setData) => {
   // [] ensures that the effect only runs once on mount
    fromFetch("http://localhost:5000/api/Authenticate/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .pipe(
        switchMap((response) => {
          if (response.ok) {
            return response.json();
          } else {
            return of({ error: true, message: `Error ${response.status}` });
          }
        }),
        catchError((err) => {
          console.error("Error posting data:", err);
          return of({ error: true, message: err.message });
        })
      )
      .subscribe({
        next: (response) => {
          if (response.error) {
            console.log(response.message);
          } else {
            console.log(response);
            setData(response);
          }
        },
        complete: () => console.log("done"),
      });
  }

export default GetData;
