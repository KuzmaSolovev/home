export default class MailExt {
  private static mailChimp(
    document: Document,
    h: string,
    i: string,
    m: any,
    p: any
  ): boolean {
    m = document.createElement(h);
    p = document.getElementsByTagName(h)[0];
    m.async = 0;
    m.src = i;
    p.parentNode.insertBefore(m, p);
    return true;
  }

  public static showPopup(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    document: Document
  ) {
    event.preventDefault();
    MailExt.mailChimp(
      document,
      "script",
      "https://chimpstatic.com/mcjs-connected/js/users/7c21f0b74066ddc05e9b914e6/deacc029d868a4905b98b6c6c.js",
      null,
      null
    );
    //unsetting the cookie
    document.cookie =
      "MCPopupClosed=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie =
      "MCPopupSubscribed=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.scrollBy(10, 10);
    return false;
  }
}
