using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace hopprLabWebsitev2.Controllers
{
    public class SectionsController : Controller
    {
        // GET: Section
        public ActionResult Web()
        {
            return View();
        }

        public ActionResult Mobile()
        {
            return View();
        }

        public ActionResult Analytics()
        {
            return View();
        }

        public ActionResult IoT()
        {
            return View();
        }
    }
}