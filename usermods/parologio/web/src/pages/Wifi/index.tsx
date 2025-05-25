import LoginForm from '@/components/LoginForm';
import preactLogo from '../../assets/preact.svg';
import './style.css';

export const sendSettings = (showErr = false) => {
  const formData = new URLSearchParams();
  formData.append("CS", "Vodafone-34808741");
  formData.append("CP", "2e49ta6z68ij4m7");

  return fetch('/settings/wifi', {
      method: 'POST',
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
      body: formData,
      // body: "CS=Vodafone-34808741&CP=123123123&I0=0&I1=0&I2=0&I3=0&G0=0&G1=0&G2=0&G3=0&S0=255&S1=255&S2=255&S3=255&CM=&AS=&AP=&AC=1&AB=0&RMAC=&ETH=0",
  })
    .then(
      (response) => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status)
          if (showErr) {
            throw new Error(response.statusText)
          }
        } else {
          // fetch('/update', {
          //   method: 'POST',
          // })
          return response.json()
        }
      }
    )
    .catch((err) => {
      if (showErr) {
        throw new Error(err)
      }
      console.log('Fetch Error :' , err)
    })
}

export function Wifi() {
	return (
    <LoginForm onSubmit={sendSettings}/>
	);
}

function Resource(props) {
	return (
		<a href={props.href} target="_blank" class="resource">
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
}
