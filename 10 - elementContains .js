const elementPresent = (parentEle, childEle) => parentEle !== childEle && parentEle.contains(childEle);

elementPresent(document.querySelector('body'), document.querySelector('body'));             // false
elementPresent(document.querySelector('head'), document.querySelector('title'));            // true