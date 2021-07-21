function main() {
  const iframe = document.querySelector('iframe')
  const resource = document.getElementById('resource')
  const search = window.location.search
  
  if (!search) return
  
  const dataURL = search.match(/data=(.*)&/)
  const resourceURL = search.match(/resource=(.*)&/)
  const originURL = search.match(/origin=(.*)&?/)

  iframe.setAttribute('src', `https://datasketch.shinyapps.io/app-simple-charts-orgs/?lang=es&org_name=ecuador-datos-abiertos&data_url=${dataURL[1]}
  `)
  resource.href = `${originURL[1]}${resourceURL[1]}`
}

window.addEventListener('DOMContentLoaded', main)