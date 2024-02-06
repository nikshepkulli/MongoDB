db.grades.find({ student_id: { $in: [654321, 546789] } })

db.grades.find({ _id: { $in: [ObjectId('65b9b75969c4895078585dc1'), ObjectId('65b9b75969c4895078585dc2')] } })
