using BECurso.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BECurso.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlumnoController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public AlumnoController(ApplicationDbContext context)
        {
            _context = context;
        }
        // GET: api/<AlumnoController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var listAlumnos = await _context.Alumno.ToListAsync();
                return Ok(listAlumnos);
            }catch (Exception ex)
            {
               return BadRequest(ex.Message);
            }
        }

        // GET api/<AlumnoController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<AlumnoController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Alumno alumno)
        {
            try
            {
                _context.Add(alumno);
                await _context.SaveChangesAsync();
                return Ok(alumno);
            }catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // PUT api/<AlumnoController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Alumno alumno)
        {
            try
            {
                if (id != alumno.Id)
                {
                    return NotFound();
                }
                _context.Update(alumno);
                await _context.SaveChangesAsync();
                return Ok(new { message = "El alumno fue actualizado con éxito." });
            }catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // DELETE api/<AlumnoController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var alumno = await _context.Alumno.FindAsync(id);
                if(alumno == null)
                {
                    return NotFound();
                }
                _context.Remove(alumno);
                await _context.SaveChangesAsync();
                return Ok(new { message = "El alumno fue eliminado con éxito." });
            }catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
