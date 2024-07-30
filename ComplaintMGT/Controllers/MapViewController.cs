using Microsoft.AspNetCore.Mvc;

namespace ComplaintMGT.Controllers
{
    public class MapViewController : Controller
    {
        public MapViewController()
        {

        }
        public IActionResult Index()
        {
            return View();
        }
    }
}
