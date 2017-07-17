using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace hopprLabWebsitev2.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jQuery/jquery-3.1.1.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-2.6.2.js"));

            bundles.Add(new ScriptBundle("~/bundles/scripts").Include(
                   "~/Scripts/typeeffect.js",
                   "~/Scripts//slick/slick.min.js",
                   "~/Scripts/scrollreveal.min.js",
                   "~/Scripts/typeeffect.js",
                   "~/Scripts/app.js"
           ));

           bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                    "~/Scripts/bootstrap/bootstrap.min.js"
           ));

           bundles.Add(new StyleBundle("~/content/css").Include(
                   "~/Content/bootstrap/bootstrap.min.css",
                   "~/Content/font-awesome.min.css",
                   "~/Content/slick/slick.css",
                   "~/Content/slick/slick-theme.css",
                   "~/Content/Site.css"
           ));
        }
    }
}