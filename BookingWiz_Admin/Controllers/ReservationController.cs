using BookingWiz_Admin.Models;
using Microsoft.AspNetCore.Mvc;

namespace BookingWiz_Admin.Controllers
{
    [Route("/api/reservation/")]
    [ApiController]
    public class ReservationController : ControllerBase
    { 
        [HttpGet("list")]
        public IActionResult GetProducts()
        { 
            var reservation = new List<Reservation>
            { 
                new Reservation { Id = 1, Name = "Sebin", Address="Test1", Location = "India" },
                new Reservation { Id = 1, Name = "Steev", Address="Test2", Location = "Germany" }
            };
            return Ok(reservation);
        }
    }
}