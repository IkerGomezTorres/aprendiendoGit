using BECurso.Models;
using Microsoft.EntityFrameworkCore;

namespace BECurso
{
    public class ApplicationDbContext :DbContext
    {
        public DbSet<Alumno> Alumno { get; set; }
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
    }
}
