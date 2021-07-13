(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3508],{4137:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5679:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var a=n(2122),r=n(9756),o=(n(7294),n(4137)),i=["components"],u={title:"DataHub Quickstart Guide",sidebar_label:"Quickstart Guide",slug:"/quickstart",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/quickstart.md"},l="DataHub Quickstart Guide",s={unversionedId:"docs/quickstart",id:"docs/quickstart",isDocsHomePage:!1,title:"DataHub Quickstart Guide",description:"Deploying DataHub",source:"@site/genDocs/docs/quickstart.md",sourceDirName:"docs",slug:"/quickstart",permalink:"/docs/quickstart",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/quickstart.md",version:"current",frontMatter:{title:"DataHub Quickstart Guide",sidebar_label:"Quickstart Guide",slug:"/quickstart",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/quickstart.md"},sidebar:"overviewSidebar",previous:{title:"Releases",permalink:"/docs/releases"},next:{title:"Debugging Guide",permalink:"/docs/debugging"}},c=[{value:"Deploying DataHub",id:"deploying-datahub",children:[]},{value:"Resetting DataHub",id:"resetting-datahub",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[{value:"Command not found: datahub",id:"command-not-found-datahub",children:[]},{value:"Miscellaneous Docker issues",id:"miscellaneous-docker-issues",children:[]}]}],p={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"datahub-quickstart-guide"},"DataHub Quickstart Guide"),(0,o.kt)("h2",{id:"deploying-datahub"},"Deploying DataHub"),(0,o.kt)("p",null,"To deploy a new instance of DataHub, perform the following steps."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/install/"},"docker")," and ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"docker-compose")," (if using Linux). Make sure to allocate enough hardware resources for Docker engine. Tested & confirmed config: 2 CPUs, 8GB RAM, 2GB Swap area.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Launch the Docker Engine from command line or the desktop app.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install the DataHub CLI"),(0,o.kt)("p",{parentName:"li"},"a. Ensure you have Python 3.6+ installed & configured. (Check using ",(0,o.kt)("inlineCode",{parentName:"p"},"python3 --version"),")"),(0,o.kt)("p",{parentName:"li"},"b. Run the following commands in your terminal"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"python3 -m pip install --upgrade pip wheel setuptools\npython3 -m pip uninstall datahub acryl-datahub || true  # sanity check - ok if it fails\npython3 -m pip install --upgrade acryl-datahub\ndatahub version\n")),(0,o.kt)("p",{parentName:"li"},"If you see \"command not found\", try running cli commands with the prefix 'python3 -m' instead: ",(0,o.kt)("inlineCode",{parentName:"p"},"python3 -m datahub version"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To deploy DataHub, run the following CLI command from your terminal"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"datahub docker quickstart\n")),(0,o.kt)("p",{parentName:"li"},"Upon completion of this step, you should be able to navigate to the DataHub UI at ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:9002"},"http://localhost:9002")," in your browser. You can sign in using ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub")," as both the username and password.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To ingest the sample metadata, run the following CLI command from your terminal"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"datahub docker ingest-sample-data\n")))),(0,o.kt)("p",null,"That's it! To start pushing your company's metadata into DataHub, take a look at the ",(0,o.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion"},"Metadata Ingestion Framework"),"."),(0,o.kt)("h2",{id:"resetting-datahub"},"Resetting DataHub"),(0,o.kt)("p",null,"To cleanse DataHub of all of it's state (e.g. before ingesting your own), you can use the CLI ",(0,o.kt)("inlineCode",{parentName:"p"},"nuke")," command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"datahub docker nuke\n")),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("h3",{id:"command-not-found-datahub"},"Command not found: datahub"),(0,o.kt)("p",null,'If running the datahub cli produces "command not found" errors inside your terminal, your system may be defaulting to an older\nversion of Python. Try prefixing your ',(0,o.kt)("inlineCode",{parentName:"p"},"datahub")," commands with ",(0,o.kt)("inlineCode",{parentName:"p"},"python3 -m"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"python3 -m datahub docker quickstart\n")),(0,o.kt)("h3",{id:"miscellaneous-docker-issues"},"Miscellaneous Docker issues"),(0,o.kt)("p",null,"There can be misc issues with Docker, like conflicting containers and dangling volumes, that can often be resolved by\npruning your Docker state with the following command. Note that this command removes all unused containers, networks, images (both dangling and unreferenced),\nand optionally, volumes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker system prune\n")))}d.isMDXComponent=!0}}]);