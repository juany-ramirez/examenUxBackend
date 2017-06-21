var hechizo = require('../schemas/hechizo.js');
var mongoose = require('mongoose');
var boom = require('boom');

exports.getHechizos = {
  handler: function(request, reply){
    var hechizos = hechizo.find({});
    reply(hechizos);
  }
}
exports.getHechizoId = {
  handler : function(request, reply){
    hechizo.findOne({'_id' : request.params._id}, function(err, Hechizo){
      if(!err && Hechizo){
        return reply({hechizo: Hechizo, success:true});
      }else if(!err){
        return reply({success:false});
      }else if(err){
        return reply({success:false});
      }
    });
  }
}
exports.getHechizoName = {
  handler : function(request, reply){
    hechizo.find({'nombre' : request.params.nombre}, function(err, Hechizos){
      if(!err && Hechizos){
        return reply({hechizo: Hechizos, success:true});
      }else if(!err){
        return reply({success:false});
      }else if(err){
        return reply({success:false});
      }
    });
  }
}
exports.getHechizoProveedor = {
  handler : function(request, reply){
    hechizo.find({'idProveedor' : request.params.idProveedor}, function(err, Hechizos){
      if(!err && Hechizos){
        return reply({hechizo: Hechizos, success:true});
      }else if(!err){
        return reply({success:false});
      }else if(err){
        return reply({success:false});
      }
    });
  }
}
exports.getHechizoTipo = {
  handler : function(request, reply){
    hechizo.find({'aprendizaje' : request.params.aprendizaje}, function(err, Hechizos){
      if(!err && Hechizos){
        return reply({hechizo: Hechizos, success:true});
      }else if(!err){
        return reply({success:false});
      }else if(err){
        return reply({success:false});
      }
    });
  }
}
exports.modifyHechizo = {
  handler: function(request, reply){
    console.log(request.payload);
    hechizo.update(
      {'_id': request.params._id},
      {$set:
        {
          nombre : request.payload.nombre,
          dificultad : request.payload.dificultad,
          aprendizaje : request.payload.aprendizaje,
        }
      }, function(err){
        if(err){
          return reply({success:false});
        }else{
          return reply({success:true});
        }
      }
    );
  }
}
exports.deleteHechizo = {
  handler: function(request, reply){
    hechizo.findOne({'_id' : request.params._id}, function(err, Hechizo){
      if(err){
        return reply({success:false});
      }else if(!err && Hechizo){
        Hechizo.remove();
        return reply({success:true});
      }else if(!err){
        return reply({success:false});
      }
    });
  }
}
exports.createHechizo = {
  handler: function(request, reply){
    var newHechizo = new hechizo({
      nombre : request.payload.nombre,
      aprendizaje : request.payload.aprendizaje,
      dificultad : request.payload.dificultad
    });
    newHechizo.save(function(err){
      if(!err){
        return reply({
          success: true
        });
      }else{
        return reply({
          success: false
        });
      }
    });
  }
}
