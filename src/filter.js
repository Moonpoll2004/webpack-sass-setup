import hljs from "highlight.js/lib/core"
import cpp from "highlight.js/lib/languages/cpp"



export function HeilightCode() {
    hljs.registerLanguage("cpp",cpp);
    hljs.highlightAll()
}