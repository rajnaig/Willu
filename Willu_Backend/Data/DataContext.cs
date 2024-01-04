using Microsoft.EntityFrameworkCore;
using Willu_Backend.Entities;

namespace Willu_Backend.Data
{
    public class DataContext : DbContext
    {
        public DbSet<AppUser> Users { get; set; }
        public DataContext(DbContextOptions options) : base(options)
        {
        }
    }
}
